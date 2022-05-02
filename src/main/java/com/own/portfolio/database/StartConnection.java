package com.own.portfolio.database;
import java.sql.Connection;
import java.sql.DriverManager;

public class StartConnection {
    public static Connection getConnection() {
        String driver = "mysql";
        String dataBaseAddress = "localhost:3306";
        String dataBaseName = "portfolio";
        String user = "root";
        String password = "root";

        String connectionUrl = "jdbc:" +
                driver + "://" +
                dataBaseAddress + "/" +
                dataBaseName;

        Connection connection = null;

        try{
            connection = DriverManager.getConnection(connectionUrl, user, password);
            System.out.println("SUCESSO ao se conectar ao banco MySQL!");
        } catch (Exception e) {
            System.out.println("FALHA ao se conectar ao banco MySQL!");
            e.printStackTrace();
        }
        return connection;
    }
}