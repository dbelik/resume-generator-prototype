# Naming conventions

Note if there's no suitable naming convetion listed in this document, you can create your own and list it here.

## Migrations

Migrations should have one of the following name patterns:

- `create_{table_name}_table` - when creating new, {table_name}, table;
- `add_{column_name}_column_to{table_name}_table` - when adding {column_name} column to {table_name}, table;
- `remove_{column_name}_column_to{table_name}_table` - when removing {column_name} column to {table_name}, table;
