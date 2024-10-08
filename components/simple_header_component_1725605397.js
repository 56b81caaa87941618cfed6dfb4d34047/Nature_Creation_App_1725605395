<!-- 
INSTRUCTION: Summary: The header component is a nav bar on top of the page -- it contains the app's logo and name in a big, bold font, to the left. In the middle there are 4 text items each hyperlinked.
-->

<template>
    <header id="header-section" style="min-height: 110px"  class="w-full">
        <nav id="nav-bar" class="bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-lg border-b border-purple-200 border-opacity-25 py-4 dark:bg-gray-900">
            <div id="nav-container" class="flex flex-wrap items-center justify-between max-w-screen-xl px-6 mx-auto">
                <a id="logo-link" href="#" class="flex items-center">
                    <img id="logo-image" src="./images/logo.svg" alt="Landwind Logo" class="h-8 mr-3 sm:h-10">
                    <span id="app-name" class="self-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                        NatureForge
                    </span>
                </a>
                <div id="menu-toggle-button" class="flex items-center lg:order-2">
                    <button id="collapse-button" data-collapse-toggle="mobile-menu-2" type="button" aria-controls="mobile-menu-2" aria-expanded="false" class="inline-flex items-center p-2 ml-1 text-sm text-pink-300 rounded-lg lg:hidden hover:bg-purple-700 hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open main menu</span>
                        <svg id="menu-open-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                        <svg id="menu-close-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="hidden w-6 h-6">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div id="mobile-menu-2" class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
                    <ul id="nav-list" class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li id="nav-item-home">
                            <a href="#" aria-current="page" class="block py-2 pl-3 pr-4 text-pink-300 rounded-lg lg:bg-transparent lg:p-0 hover:bg-purple-700 hover:bg-opacity-50 transition-all duration-300 ease-in-out">
                                Create virtual ecosystems
                            </a>
                        </li>
                        <li id="nav-item-1">
                            <a href="#" class="block py-2 pl-3 pr-4 text-pink-200 rounded-lg hover:bg-purple-700 hover:bg-opacity-50 lg:hover:bg-transparent lg:hover:text-pink-400 lg:p-0 transition-all duration-300 ease-in-out">
                                Design custom flora and fauna
                            </a>
                        </li>
                        <li id="nav-item-2">
                            <a href="#" class="block py-2 pl-3 pr-4 text-pink-200 rounded-lg hover:bg-purple-700 hover:bg-opacity-50 lg:hover:bg-transparent lg:hover:text-pink-400 lg:p-0 transition-all duration-300 ease-in-out">
                                Simulate environmental changes
                            </a>
                        </li>
                        <li id="nav-item-3">
                            <a href="#" class="block py-2 pl-3 pr-4 text-pink-200 rounded-lg hover:bg-purple-700 hover:bg-opacity-50 lg:hover:bg-transparent lg:hover:text-pink-400 lg:p-0 transition-all duration-300 ease-in-out">
                                Share your natural creations
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
