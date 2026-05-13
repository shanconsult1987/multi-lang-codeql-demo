package com.demo;

import java.io.IOException;

public class App {

    public static void main(String[] args) throws IOException {

        String userInput = "cmd.exe /c dir";

        Runtime.getRuntime().exec(userInput);

        System.out.println("Executed");
    }
}
