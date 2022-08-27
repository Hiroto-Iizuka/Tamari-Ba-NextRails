# 開発環境構築


```:backend/.env
DATABASE_HOST=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_SOCKET=
```


```
// 環境変数をdocker-compose.ymlに読み込ませるため
$ cd backend

$ docker-compose build

$ docker-compose up -d

// 初回にDB接続を行う場合
$ docker-compose run backend rails db:create
```
