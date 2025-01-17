package com.library;

import java.math.BigDecimal;
import java.util.Currency;
import java.util.Date;

public class LoanBook {

    public  String member_id;
    public String book_id;
    public Date date_loan;
    public  Date date_return_preview;
    public  Date date_return_effective;
    public BigDecimal penalty;

    public LoanBook(String member_id, String book_id, Date date_loan, Date date_return_preview, Date date_return_effective, BigDecimal penalty) {
        this.member_id = member_id;
        this.book_id = book_id;
        this.date_loan = date_loan;
        this.date_return_preview = date_return_preview;
        this.date_return_effective = date_return_effective;
        this.penalty = penalty;
    }

    public String getMember_id() {
        return member_id;
    }

    public String getBook_id() {
        return book_id;
    }

    public Date getDate_loan() {
        return date_loan;
    }

    public Date getDate_return_preview() {
        return date_return_preview;
    }

    public Date getDate_return_effective() {
        return date_return_effective;
    }
    public BigDecimal getPenalty(BigDecimal penalty){
        return penalty;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
    }

    public void setBook_id(String book_id) {
        this.book_id = book_id;
    }

    public void setDate_loan(Date date_loan) {
        this.date_loan = date_loan;
    }

    public void setDate_return_preview(Date date_return_preview) {
        this.date_return_preview = date_return_preview;
    }

    public void setDate_return_effective(Date date_return_effective) {
        this.date_return_effective = date_return_effective;
    }
    public void setPenalty(BigDecimal penalty){
        this.penalty = penalty;


    }


    public  String toString(){
        return "\nMember ID:   " + member_id+
                "\nBook ID:   " + book_id +
                "\nDate Loan: " + date_loan +
                "\nDate Return Preview:  " + date_return_preview +
                "\nDate Return Effective: " + date_return_effective+
                "\nPenalty: " + penalty +
                "\n\n";
    }

}
