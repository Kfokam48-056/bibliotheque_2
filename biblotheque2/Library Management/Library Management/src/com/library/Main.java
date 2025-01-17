package com.library;

public class Main {
    public static void main(String[] args) {
        BooksDAO DAO = new BooksDAO();

         DAO.connection();



        Books bk = new Books(
                "Core Mathematics",
                "Micheal",
                "Science",
                13);

        DAO.addBook(bk);
    }

}
