<?php

namespace AwStudio\Wireframes;

use AwStudio\Wireframes\Console\MakeWireframesCommand;
use Illuminate\Support\ServiceProvider;

class WireframesServiceProvider extends ServiceProvider
{
    /**
     * The commands to be registered.
     *
     * @var array
     */
    protected $commands = [
        'MakeWireframes' => MakeWireframesCommand::class,
    ];

    /**
     * Register application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerCommands($this->commands);
    }

    /**
     * Register the given commands.
     *
     * @param  array $commands
     * @return void
     */
    protected function registerCommands(array $commands)
    {
        foreach (array_keys($commands) as $command) {
            $this->{"register{$command}Command"}();
        }

        $this->commands(array_values($commands));
    }

    /**
     * Regsiter make:admin command.
     *
     * @return void
     */
    protected function registerMakeWireframesCommand()
    {
        $this->app->singleton(MakeWireframesCommand::class, function ($app) {
            return new MakeWireframesCommand($app['files']);
        });
    }
}
