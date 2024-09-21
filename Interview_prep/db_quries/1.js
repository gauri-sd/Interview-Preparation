const One = `Retrieve the highest order amount from the "orders" table.`;
const A1 = `SELECT MAX(order_amount) AS highest_order_amount  FROM orders;`;

const two = `Retrieve the 2nd largest order amount from the "orders" table.`;
const A2 = `SELECT DISTINCT order_amount AS second_largest_order_amount 
            FROM orders 
            ORDER BY order_amount DESC 
            LIMIT 1 OFFSET 2 ;`;

const three = `Retrieve the 4th largest order amount from the "orders" table.`;
const A3 = `SELECT DISTINCT order_amount AS fourth_largest_order_amount 
            FROM orders 
            ORDER BY order_amount DESC 
            LIMIT 1 OFFSET 3 ;`;

const four = `Retrieve the names of customers along with their corresponding orders.`;
const A4 = `SELECT C.name, O.order_id
            FROM customers C
            JOIN orders O ON C.customer_id = O.customer_id;`;

const five = `Retrieve the names of employees along with the departments they belong to:`;
const A5 = `SELECT e.employee_name, d.department_name
            FROM employees e
            JOIN departments d ON e.department_id = d.department_id;`;

const six = `Retrieve the highest order amount from the "orders" table.`;
const A6 = `SELECT MAX(order_amount) AS highest_order_amount  FROM orders;`;
