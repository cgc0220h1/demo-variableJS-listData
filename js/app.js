let number1 = 10;
let number2 = 10.5;
let string1 ="Hà Nội";
let boolean1=true;

{
    document.write("<h2>Demo các giá trị trong Javascript</h2>");
    document.write("<table>");
    document.write("<tr>");
    document.write("<td>" + number1 + "</td>");
    document.write("<td>" + "Số nguyên và có kiểu dữ liệu là kiểu số (number)" + "</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>" + number2 + "</td>");
    document.write("<td>" + "Số thập phân và có kiểu dữ liệu là kiểu số (number)" + "</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>" + string1 + "</td>");
    document.write("<td>" + "Chữ và có kiểu dữ liệu là kiểu chuỗi (string)" + "</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>" + boolean1 + "</td>");
    document.write("<td>" + "Giá trị là true và có kiểu dữ liệu là kiểu logic (boolean)" + "</td>");
    document.write("</tr>");
    document.write("</table>");
}