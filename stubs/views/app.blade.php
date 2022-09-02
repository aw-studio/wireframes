@php
    $meta = $page['props']['page']['meta'];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
 
        @vite('resources/js/app.ts')

        @isset($meta['title'])
            <title>
                {{ $meta['title'] }}
            </title>
            <meta name="title" content="{{ $meta['title'] }}">
        @endisset
        @isset($meta['description'])
            <meta name="description" content="{{ $meta['description'] }}">
        @endisset
    </head>
    <body>
        @inertia
    </body>
</html>
