5.times do
  Blog.create(
    name: Faker::HowIMetYourMother.catch_phrase, 
    body: Faker::HowIMetYourMother.quote,
  )
end
puts "seeded"