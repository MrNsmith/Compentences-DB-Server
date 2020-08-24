select book_name 
from books
-- Sub Query
where book_price < (
    select 
        avg (book_price)
        
        from books
);
