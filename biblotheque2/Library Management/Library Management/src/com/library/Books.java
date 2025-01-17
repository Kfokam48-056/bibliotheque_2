package com.library;

public class Books {

    public  String title;
    public  String author;
    public  String category;
    public  int copies;

    public Books(String title, String author, String category, int copies) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.copies = copies;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getCategory() {
        return category;
    }

    public int getCopies() {
        return copies;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setCopies(int copies) {
        this.copies = copies;
    }
    @Override // making a string representation of the object
    public  String toString(){
        return "\nTitle:   " + title+
                "\nAuthor:   " + author +
                "\n Category: " + category +
                "\n Copies:  " + copies +
                "\n\n";
    }
}
