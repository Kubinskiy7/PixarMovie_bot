Пример README для твоего проекта:

# Pixar Projects Web App

A minimalistic web app that lists all Pixar projects, including short films, with the release year, director, and links to watch them on **rezka.ag**.

## Demo

You can view the live demo of the project on GitHub Pages:
[Pixar Projects Web App](https://github.com/Kubinskiy7/PixarMovie_bot)

## Features

- A clean and minimalistic design.
- Displays all Pixar projects (including short films) with:
  - Title
  - Release year
  - Director
  - Link to watch on rezka.ag
- Uses **Telegram Web Apps (TWA)** to integrate with a Telegram bot for seamless interaction.

## Getting Started

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Kubinskiy7/PixarMovie_bot.git

2.	Open the index.html file in your browser:

   open index.html


3.	Optionally, you can serve the project using a simple HTTP server:

   python -m http.server



Usage with Telegram Web Apps

This project is integrated with Telegram Web Apps (TWA). To use it with your bot:

	1.	Deploy the project (e.g., on GitHub Pages).
	2.	In your bot, add a button that opens this web app using the Telegram Web Apps API:

from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton

markup = InlineKeyboardMarkup()
web_app_button = InlineKeyboardButton(text="Open Pixar Projects", web_app={'url': 'https://github.com/Kubinskiy7/PixarMovie_bot'})
markup.add(web_app_button)
bot.send_message(chat_id, "Click the button to view Pixar projects:", reply_markup=markup)



Technologies

	•	HTML
	•	CSS (for styling)
	•	JavaScript (for dynamic content generation)
	•	Telegram Web Apps

Author

Created by Kubinskiy7.

License

This project is licensed under the MIT License.
