<?php

namespace AwStudio\Wireframes\Console;

use Illuminate\Support\Facades\Artisan;

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
     * Execute the console command
     *
     * @return int
     */
    public function handle()
    {
        //

        // Make Admin
        Artisan::call('make:admin', ['name' => 'admin']);
        Artisan::call('make:media-manager', ['app' => 'admin', 'name' => 'media']);
        Artisan::call('make:page-builder', ['app' => 'admin', 'name' => 'page']);
        Artisan::call('make:nav-builder', ['app' => 'admin']);

        return 0;
    }

    /**
     * Replaced variables.
     *
     * @return array
     */
    protected function replaces(): array
    {
        return [
            'time'      => date('Y_m_d_His', time()),
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
