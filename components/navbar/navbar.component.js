const NAVBAR_ELEMENT = document.getElementById('navbar');

// Function Constructor
function NavbarComponent(){

    let template = `
    <nav id="navbar-component" class="navbar navbar-dark bg-dark" aria-label="navbar-component">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">NCU</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample01">
                <ul class="navbar-nav me-auto mb-2">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdown01">
                            <li><a class="dropdown-item" href="#">Login</a></li>
                            <li><a class="dropdown-item" href="#">Register</a></li>
                            <li><a class="dropdown-item" href="#">Dashboard</a></li>
                        </ul>
                    </li>
                </ul>
                <form>
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                </form>
            </div>
        </div>
    </nav>
    
    `;

    function injectTemplate(){
        NAVBAR_ELEMENT.innerHTML = template;
        cb();
    }
    function navigateToView(e){
        console.log(`Navigating to ${e.target.dataset.route}`)
    }

    function logout() {
        console.log('Logging you out!');
    }

    this.render = function() {
        // Can reference to this function because it's within scope.
        injectTemplate( () => {
            document.getElementById('logout').addEventListener('click', logout);
            document.getElementById('nav-to-login').addEventListener('click', navigateToView);
            document.getElementById('nav-to-register').addEventListener('click', navigateToView);
            document.getElementById('nav-to-dashboard').addEventListener('click', navigateToView);
        });
    }

}

export default new NavbarComponent();