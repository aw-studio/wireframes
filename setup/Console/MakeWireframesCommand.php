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

        // Make Admin
        // Artisan::call('make:admin', ['name' => 'admin']);
        // Artisan::call('make:media-manager', ['app' => 'admin', 'name' => 'media']);
        // Artisan::call('make:page-builder', ['app' => 'admin', 'name' => 'page']);
        // Artisan::call('make:nav-builder', ['app' => 'admin']);

        return 0;
    }

    /**
     * Make the wireframes resources.
     *
     * @return void
     */
    protected function makeResources()
    {
        // remove default laravel js resources
        $this->files->deleteDirectory(resources_path('js'));
        $this->files->deleteDirectory(resources_path('css'));

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

        // setup resources
        $this->files->ensureDirectoryExists(resources_path('app/css'));
        $this->files->ensureDirectoryExists(resources_path('app/js'));

        // css
        $this->files->copy(__DIR__.'/../../src/index.css', resources_path('app/css/app.css'));

        // js
        $this->files->copyDirectory(__DIR__.'/../../src/components', resources_path('app/js/components'));
        $this->files->copyDirectory(__DIR__.'/../../src/layout', resources_path('app/js/layout'));
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
