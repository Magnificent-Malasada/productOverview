SELECT * FROM products;

SELECT * FROM products INNER JOIN features ON products.id = features.product_id WHERE product_id = 500;

SELECT * FROM products INNER JOIN styles ON products.id = styles.product_id WHERE product_id = 500;

SELECT * FROM styles INNER JOIN photos ON styles.id = photos.style_id WHERE product_id = 500;

SELECT * FROM styles INNER JOIN skus ON styles.id = skus.style_id WHERE product_id = 500;

SELECT * FROM products INNER JOIN related_products ON products.id = related_products.product_id WHERE product_id = 500;


ALTER TABLE products
ADD INDEX idx_sku (product_name);

DROP INDEX idx_sku ON products;

ADD UNIQUE idx_sku (product_name);

CREATE INDEX idx_description ON products (description)

SHOW INDEX FROM (table)

ALTER TABLE features ADD INDEX product_features (product_id);

ALTER TABLE related ADD INDEX product_related (product_id);
