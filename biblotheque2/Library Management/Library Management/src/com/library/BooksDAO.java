package com.library;

import java.sql.*;

public class BooksDAO {
  static Connection con;

public void connection(){

    try {
        Class.forName("org.postgresql.Driver");

       con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/library","postgres", "bamenda05");
        System.out.println("Connected");

    } catch (Exception e) {

        throw new RuntimeException(e);
    }
 }

    public static String addBook(Books book){

        String query = "INSERT INTO public.books values(?, ?, ?, ?)";
        try (PreparedStatement stmt = con.prepareStatement(query)){


            stmt.setString(1, book.title);
            stmt.setString(2, book.author);
            stmt.setString(3, book.category);
            stmt.setInt(4, book.copies);
            //stmt.close();
            //con.close();

            System.out.println("Row Inserted Successful");

        } catch (SQLException e) {

            //System.out.println(e);
            e.printStackTrace();
        }

        return query;

    }



}




