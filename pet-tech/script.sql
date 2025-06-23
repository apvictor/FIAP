CREATE TABLE product (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  price DOUBLE PRECISION
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  creation_date TIMESTAMP WITHOUT TIME ZONE
);

CREATE TABLE product_category (
  product_id UUID NOT NULL,
  category_id SERIAL NOT NULL,
  PRIMARY KEY (product_id, category_id),
  FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE
);

CREATE TABLE address (
  id SERIAL PRIMARY KEY,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip_code VARCHAR(10) NOT NULL
);

CREATE TABLE person (
  id BIGSERIAL PRIMARY KEY,
  cpf VARCHAR(11) NOT NULL,
  name VARCHAR(100) NOT NULL,
  birth DATE NOT NULL,
  email VARCHAR(255) NOT NULL
);

ALTER TABLE address
  ADD COLUMN person_id BIGINT NOT NULL;

ALTER TABLE address
  ADD CONSTRAINT fk_address_person
  FOREIGN KEY (person_id)
  REFERENCES person (id);

CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

ALTER TABLE person
  ADD COLUMN user_id INT UNIQUE;

ALTER TABLE person
  ADD CONSTRAINT fk_person_user
  FOREIGN KEY (user_id)
  REFERENCES "user" (id);
