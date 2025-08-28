# Venus

Web application using [ASP.NET Core Razor Pages](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start)

## Use Visual Studio Code

* Create a solution: `dotnet new sln`
* Create a console app: `dotnet new console -o ShowCase`
* Create a class library project: `dotnet new classlib -o StringLibrary`
* Create a unit test project: `dotnet new xunit -o StringLibrary.Tests`
* Add a project to a solution: `dotnet sln add todo-app/todo-app.csproj`
* Add a project reference: `dotnet add ShowCase/ShowCase.csproj reference StringLibrary/StringLibrary.csproj`
* Create a minimal web API: `dotnet new web -o TodoApi`
* Create a Razor Pages web app: `dotnet new webapp -o RazorPagesMovie`

## Git submodules

- Adding a submodule: `git submodule add <repository_url> <path>`
- Initializing submodules: `git submodule init`
- Updating submodules: `git submodule update`
- Cloning a repository with submodules: `git clone --recurse-submodules <repository_url>`
- Removing submodule: `git rm -f <path_to_submodule>`