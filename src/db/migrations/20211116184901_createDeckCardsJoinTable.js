exports.up = function (knex) {
  return knex.schema.createTable("decks_cards", (table) => {
    table.integer("deck_id").unsigned().notNullable();
    table
      .foreign("deck_id")
      .references("deck_id")
      .inTable("decks")
      .onDelete("CASCADE");
    table.integer("card_id").unsigned().notNullable();
    table
      .foreign("card_id")
      .references("card_id")
      .inTable("cards")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products_categories");
};