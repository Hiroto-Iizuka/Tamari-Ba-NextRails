User.create!(name: "管理者", 
  email: "iizuka@example.com",
  encrypted_password: "password",
  admin: true)

User.create!(name: "田中",
             email: "tanaka@example.com",
             encrypted_password: "password")

User.create!(name: "佐藤",
             email: "sato@example.com",
             encrypted_password: "password")

User.create!(name: "Watanabe",
             email: "watanabe@example.com",
             encrypted_password: "password")

puts "初期データの投入に成功しました！"
