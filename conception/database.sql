DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO public;

CREATE TABLE items
(
    item_id               INT GENERATED ALWAYS AS IDENTITY,
    item_name             VARCHAR(80) NOT NULL,
    item_price            INT,
    item_acquisition_date DATE,
    location_id           SMALLINT,
    item_comment          TEXT,
        PRIMARY KEY (item_id)
);

CREATE TABLE locations
(
    location_id        INT GENERATED ALWAYS AS IDENTITY,
    location_name      varchar(80) not null,
    parent_location_id smallint,
    PRIMARY KEY (location_id)
);

ALTER TABLE items
    ADD CONSTRAINT fk_location
        FOREIGN KEY (location_id)
            REFERENCES locations (location_id);

ALTER TABLE locations
    ADD CONSTRAINT fk_parent_location
        FOREIGN KEY (parent_location_id)
            REFERENCES items (item_id);

