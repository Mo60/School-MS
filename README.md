# Art-Class-Program
Code (Front End and Back End) built for client to interact with the database per requirements and needs.

------
// to start a mssql docker container
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrongPassword" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest
docker ps -a
docker start fedbb35817fb
docker container ls -a

sudo apt-get update
sudo apt-get install mssql-tools unixodbc-dev

//For convenience, add /opt/mssql-tools/bin/ to your PATH environment variable, to make sqlcmd or bcp accessible from the bash shell.
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc
//https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver16

docker exec -it mycontainer sh
sqlcmd -S localhost -U sa -P 'yourStrongPassword'

CREATE DATABASE TestDB;
SELECT Name from sys.databases;
GO

**Restore database Testdb from disk = 'D:\Backup\Testdb_full_backup.bak'  **// Work on it later
//https://www.tutorialspoint.com/ms_sql_server/ms_sql_server_create_database.htm

exit

echo "module.exports = {
    HOST: 'localhost',
    PORT: '1433',
    USER: 'sa',
    PASSWORD: 'yourStrongPassword',
    DB: 'TestDB',
    dialect: 'mssql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };" > ./backend/app/config/db.config.js

  //https://www.cyberciti.biz/faq/create-a-file-in-linux-using-the-bash-shell-terminal/

cd backend/ && npm i && cd ..
cd frontend/ && npm i && cd ..

//in a new terminal Ctrl+Shift+`

cd backend && npm start

//back to old terminal

cd 
------

------
Refferences : https://www.bezkoder.com/node-js-sql-server-crud/
https://hub.docker.com/_/microsoft-mssql-server



