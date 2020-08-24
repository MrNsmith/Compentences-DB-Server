-- many to many
CREATE  TABLE books(
	book_id SERIAL PRIMARY KEY,
	book_name VARCHAR(150),
	book_price int
	
); 
CREATE TABLE bill (
    bill_id SERIAL PRIMARY KEY,
    bill text,
    billdate date NOT NULL DEFAULT CURRENT_DATE
);
CREATE TABLE book_bill(
    bill_id  int REFERENCES bill(bill_id) ON UPDATE CASCADE ON DELETE CASCADE,
    book_id int REFERENCES book(book_id) ON UPDATE CASCADE,
    amount  numeric NOT NULL DEFAULT 1
);