# Ruby on Rails Coding Challenge

This is a rails application that follows the description of Mconf's interview coding activity.

## Installing and Running

After installing the version 2.7.4 of Ruby and the dependencies `sqlite3`, `nodejs` and `yarn`, run:

```sh
gem install bundler
bundle install

rake db:create
rake db:migrate

yarn add @rails/webpacker
bundle update webpacker
```

and you should be good to go.
