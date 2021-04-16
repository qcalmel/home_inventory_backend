SET session_replication_role = 'replica';

INSERT INTO items (id, name, price, "acquisitionDate","locationId")
VALUES ('Clavier Logitech MX Keys', 10000, '2020-06-20', 3),
       ('Souris Logitech MX Master', 10000, '2020-06-20', 3);

INSERT INTO locations (name, "createdAt", "updatedAt")
VALUES ('Maison',null),
       ('Chambre', 1),
       ('Bureau', 2);

SET session_replication_role = 'origin';