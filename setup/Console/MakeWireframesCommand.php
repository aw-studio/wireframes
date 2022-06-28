<?php

namespace AwStudio\Wireframes\Console;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;

class MakeWireframesCommand extends BaseMakeCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'make:wireframes';

    /**
     * The name of the directory containing the published files.
     *
     * @var string
     */
    protected $publishes = 'wireframes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a wireframes application.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //
        $this->makeResources();
        $this->makeInertiaMiddleware();

        // Make Admin
        Artisan::call('make:admin', ['name' => 'admin']);
        Artisan::call('make:media-manager', ['app' => 'admin', 'name' => 'media']);
        Artisan::call('make:page-builder', ['app' => 'admin', 'name' => 'page']);
        Artisan::call('make:nav-builder', ['app' => 'admin']);

        $this->line('Created Macrame Admin application and a wireframes application.');
        $this->line("Just a view more steps to get started:\n");

        $this->line('1. Make sure the following npm packages are installed:');
        $this->info("npm i tailwindcss lodash.merge @headlessui/vue @macramejs/admin-vue3 @macramejs/admin-config @macramejs/admin-vue3 @macramejs/macrame @macramejs/macrame-vue3 @macramejs/page-builder-vue3 ts-loader typescript vue@next vue-loader@next @inertiajs/inertia @inertiajs/inertia-vue3 @inertiajs/progress vue3-dropzone vue3-popper v-calendar@next @floating-ui/dom\n");

        $this->line('2. Make sure to update composers autoloader:');
        $this->info("composer dumpautoload\n");

        $this->line('3. Run the migrations and the seeder:');
        $this->info("php artisan migrate:fresh --seed\n");

        $this->line('4. Create a development build:');
        $this->info("npm run watch\n");

        $this->line('5. Visit '.url('admin').' and login using the following credentials:');
        $this->info('username: admin@admin.com');
        $this->info('password: secret');

        return 0;
    }

    /**
     * Make the inertia middleware.
     *
     * @return void
     */
    protected function makeInertiaMiddleware()
    {
        Artisan::call('inertia:middleware');
        $insert = "return array_merge(parent::share(\$request), [
            'nav' => [
                'main' => new NavResource(
                    Menu::where('type', 'main')->first()->items()->whereRoot()->get()
                ),
                'footer' => new NavResource(
                    Menu::where('type', 'footer')->first()->items()->whereRoot()->get()
                ),
            ],
        ]);";
        $search = 'return array_merge(parent::share($request), [
            //
        ]);';

        $path = app_path('Http/Middleware/HandleInertiaRequests.php');
        $content = $this->files->get($path);
        $content = Str::replace($search, $insert, $content);
        $this->files->put($path, $content);

        $insert = 'use App\Models\Menu;
use App\Http\Resources\NavResource;';
        $before = 'use Illuminate\Http\Request;';
        $this->insertBefore($path, $insert, $before);

        $insert = '            \App\Http\Middleware\HandleInertiaRequests::class,';
        $after = '\Illuminate\Routing\Middleware\SubstituteBindings::class,';
        $kernelPath = app_path('Http/Kernel.php');
        $this->insertAfter(
            path: $kernelPath,
            insert: $insert,
            after: $after
        );
    }

    /**
     * Make the wireframes resources.
     *
     * @return void
     */
    protected function makeResources()
    {
        // remove default laravel js resources
        $this->files->deleteDirectory(resource_path('js'));
        $this->files->deleteDirectory(resource_path('css'));

        // webpack.mix.js
        $insert = "// App
mix.ts('resources/app/js/app.ts', 'public/js/app').vue();
mix.postCss('resources/app/css/app.css', 'public/css/app', [
    tailwindcss('./app.tailwind.config.js'),
]);
mix.alias({
    '@app': path.join(__dirname, 'resources/app/js'),
});";
        $replace = "mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);";
        $content = $this->files->get(base_path('webpack.mix.js'));
        $content = Str::replaceFirst($replace, $insert, $content);
        $this->files->put(base_path('webpack.mix.js'), $content);

        $insert = "const path = require('path');
const tailwindcss = require('tailwindcss');";
        $after = "const mix = require('laravel-mix');";
        $this->insertAfter(base_path('webpack.mix.js'), $insert, $after);

        // tailwind.config.js
        $this->files->copy(__DIR__.'/../../tailwind.config.js', base_path('app.tailwind.config.js'));
        $content = $this->files->get(base_path('app.tailwind.config.js'));
        $content = str_replace("content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],", "content: ['./resources/app/**/*.vue'],", $content);
        $this->files->put(base_path('app.tailwind.config.js'), $content);

        // setup resources
        $this->files->ensureDirectoryExists(resource_path('app/css'));
        $this->files->ensureDirectoryExists(resource_path('app/js'));

        // view
        $this->files->copy(__DIR__.'/../../src/app.blade.php', resource_path('views/app.blade.php'));

        // css
        $this->files->copy(__DIR__.'/../../src/index.css', resource_path('app/css/app.css'));

        // js
        $this->files->copyDirectory(__DIR__.'/../../src/components', resource_path('app/js/components'));
        $this->files->copyDirectory(__DIR__.'/../../src/layout', resource_path('app/js/layout'));
        $this->files->copyDirectory(__DIR__.'/../../src/modules', resource_path('app/js/modules'));
        $this->files->copyDirectory(__DIR__.'/../../src/types', resource_path('app/js/types'));
        $this->files->copyDirectory(__DIR__.'/../../src/Pages', resource_path('app/js/Pages'));
        $this->files->copy(__DIR__.'/../../src/app.ts', resource_path('app/js/app.ts'));
    }

    /**
     * Replaced variables.
     *
     * @return array
     */
    protected function replaces(): array
    {
        return [
            'time' => date('Y_m_d_His', time()),
        ];
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            // ['all', 'a', InputOption::VALUE_NONE, 'Generate a migration, seeder, factory, policy, and resource controller for the model'],
            // ['controller', 'c', InputOption::VALUE_NONE, 'Create a new controller for the model'],
        ];
    }
}
