# Asol

## Installations

1. You have to install php and composer before doing anything.

2. Clone the repo.

```sh
git clone git@github.com:kerneltics/Project-2.git
```

3. Move to the backend folder.

```sh
cd Project-2/Back-end/
```

4. Install dependencies.

```sh
composer install
```

5. create .env file, then copy everything from .env.example and paste it in .env file

6. create application key
   
```sh
php artisan key:generate
```

7. Run local development.

```sh
php artisan serve
```

## Notes about the api:
- I have shared with you postman collection that contains every Api endpoint.
- you don't have to touch anything, just see the examples.
- when you hit the login endpoint you have to provide the admin email and his password, and it will provide you the Auth token.
- you save this token in local storage or sessions, cookies, etc.
- after that when you hit the endpoints that need auth, you have to provide that token in the axios header, and it should be as follows: Bearer ${the token}.
- finally you have to do the same with logout endpoint to delete that token.
- last but not least, please don't touch register endpoint and don't do UI for it.
