package com.library;

import java.util.Date;

public class Members {

    public  String name;
    public  String first_name;
    public  String email;
    public Date membershipdate;

    public Members(String name, String first_name, String email, Date membershipdate) {
        this.name = name;
        this.first_name = first_name;
        this.email = email;
        this.membershipdate = membershipdate;
    }

    public String getName() {
        return name;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getEmail() {
        return email;
    }

    public Date getMembershipdate() {
        return membershipdate;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMembershipdate(Date membershipdate) {
        this.membershipdate = membershipdate;
    }

    @Override // making a string representation of the object
    public  String toString(){
        return "\nName:   " + name+
                "\nFirst Name:   " + first_name +
                "\n Email: " + email +
                "\n Membership Date  " + membershipdate +
                "\n\n";
    }
}
