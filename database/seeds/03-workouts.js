exports.seed = function (knex, Promise) {
  return knex('workouts').insert([{
      workout_category: "Abs",
      workout_title: "Nathans ab workout",
      workout_date: "2020-05-22",
      workout_length: "30m",
      workout_share: true,
      completed: false,
      user_id: 2,
      entity_id: 1
    },
    {
      workout_category: "Legs",
      workout_title: "Nathans Leg workout",
      workout_date: "2020-05-22",
      workout_length: "30m",
      workout_share: true,
      completed: false,
      user_id: 2,
      entity_id: 2
    },
    {
      workout_category: "leg",
      workout_title: "Nathans leg 2 workout",
      workout_date: "2020-08-22",
      workout_length: "30m",
      workout_share: true,
      completed: false,
      user_id: 1,
      entity_id: 3
    },
    {
      workout_category: "Biceps",
      workout_title: "Cory's bicep workout",
      workout_date: "2020-05-22",
      workout_length: "30m",
      workout_share: true,
      completed: false,
      user_id: 3,
      entity_id: 4
    },
    {
      workout_category: "N/A",
      workout_title: "New workout2",
      workout_date: "2020-05-22",
      workout_length: "30m",
      workout_share: true,
      completed: false,
      user_id: 1,
      entity_id: 5
    },
    {
      workout_category: "Abs",
      workout_title: "Giovani's workout",
      workout_date: "2020-07-16",
      workout_length: "1H",
      workout_share: true,
      completed: false,
      user_id: 4,
      entity_id: 16
    },
    {
      workout_category: "Biceps",
      workout_title: "Leza's workout",
      workout_date: "2020-07-16",
      workout_length: "1H",
      workout_share: true,
      completed: false,
      user_id: 5,
      entity_id: 17
    },
    {
      workout_category: "Biceps",
      workout_title: "Jessicas's workout",
      workout_date: "2020-07-16",
      workout_length: "1H",
      workout_share: true,
      completed: false,
      user_id: 6,
      entity_id: 18
    }
  ]);
};