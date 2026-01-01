class AppController {
  // static method to get the home page
  static getHomePage(request, response) {
    response.status(200).send('Hello ALX');
  }
}

module.exports = AppController;
