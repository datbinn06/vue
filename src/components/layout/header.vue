<template>
    <div class="text-center bg-light p-4">
        <nav class="navbar navbar-expand-sm">
            <div class="container">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link"> Trang chu</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/list-products" class="nav-link">Quan ly san pham</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/create-products" class="btn btn-primary">Them san pham</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
