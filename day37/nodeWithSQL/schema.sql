-- create table user(
--     id int primary key,
--     username varchar(50) unique,
--     email varchar(100) unique not null,
--     password varchar(50) not null
-- );
-- //dropping the key constraints 
alter table user
  drop primary key;
-- modifing the id  column

alter table user
 modify column id varchar(100) primary key;