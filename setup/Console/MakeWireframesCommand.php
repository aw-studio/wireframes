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
        if (! $this->confirm('Did you already install the Macrame Admin API scaffolding?', true)) {
            Artisan::call('make:admin');
            $this->line("Installed Macrame Admin API for you.\n");
        }

        $this->line("Just a view more steps to get started:\n");

        $npmDependencies = [
            'tailwindcss',
            'lodash.merge',
            '@headlessui/vue',
            'ts-loader',
            'typescript',
            'vue@next',
            'vue-loader@next',
            '@inertiajs/inertia',
            '@inertiajs/inertia-vue3',
            '@inertiajs/progress',
            'vue3-popper',
            '@floating-ui/dom',
            'embla-carousel',
            'embla-carousel-autoplay',
            'lazysizes',

            '@vitejs/plugin-vue',
        ];

        $this->line('1. Make sure the following npm packages are installed:');
        $this->info('npm i '.implode(' ', $npmDependencies)."\n");

        $this->line('2. Make sure to update composers autoloader:');
        $this->info("composer dumpautoload\n");

        $this->line('3. Run the migrations and the seeder:');
        $this->info("php artisan migrate:fresh --seed\n");

        $this->line('4. Create a development build:');
        $this->info("npm run dev\n");

        $this->line('5. Visit you Macrame Admin url and login using the following credentials:');
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

        // tailwind.config.js
        $this->files->copy(__DIR__.'/../../tailwind.config.js', base_path('tailwind.config.js'));
        $content = $this->files->get(base_path('tailwind.config.js'));
        $content = str_replace("content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],", "content: ['./resources/**/*.vue'],", $content);
        $this->files->put(base_path('tailwind.config.js'), $content);

        // setup resources
        $this->files->ensureDirectoryExists(resource_path('css'));
        $this->files->ensureDirectoryExists(resource_path('js'));

        // view
        $this->files->copy(__DIR__.'/../../src/app.blade.php', resource_path('views/app.blade.php'));

        // css
        $this->files->copy(__DIR__.'/../../src/index.css', resource_path('css/app.css'));

        // js
        $this->files->copyDirectory(__DIR__.'/../../src/components', resource_path('js/components'));
        $this->files->copyDirectory(__DIR__.'/../../src/layout', resource_path('js/layout'));
        $this->files->copyDirectory(__DIR__.'/../../src/modules', resource_path('js/modules'));
        $this->files->copyDirectory(__DIR__.'/../../src/types', resource_path('js/types'));
        $this->files->copyDirectory(__DIR__.'/../../src/Pages', resource_path('js/Pages'));
        $this->files->copy(__DIR__.'/../../src/app.ts', resource_path('js/app.ts'));

        // tsconfig (workaround?)
        $this->files->copy(__DIR__.'/../../stubs/tsconfig.json', base_path('tsconfig.json'));
        $this->files->copy(__DIR__.'/../../stubs/shims-vue.d.ts', base_path('shims-vue.d.ts'));
        $this->files->copy(__DIR__.'/../../stubs/vite.config.ts', base_path('vite.config.ts'));
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
        return [];
    }
}
