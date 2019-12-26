
import assert from 'assert';

describe('Browser', function () { //define suite title by passing a string

    it('Tab title', function () { //define test title by passing a string
     browser.url('/');
     //let title=browser.getTitle();
     assert.equal(browser.getTitle(),'Intellectual Games Club')
    })
    it('Header is displayed', function () { //define test title by passing a string
     $$('.card-footer')[0].isDisplayed()
    })
    it('App/Pages container is displyed', function () { //define test title by passing a string
      $('.site-content').isDisplayed()
    })
    it('Footer is displayed', function () { //define test title by passing a string
      $$('.card-footer')[1].isDisplayed()
    })
});