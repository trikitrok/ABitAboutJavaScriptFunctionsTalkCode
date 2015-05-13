var LocaleFunctions = (function(locale, preferredLanguages) {
  var localeData = {
      'es': {
        patternForFloats: "^\\d+(,\\d+)?$",
        decimalSeparator: ',',
        decimalSeparatorToBeReplaced: '.'
      },

      'en': {
        patternForFloats: "^\\d+([.]\\d+)?$",
        decimalSeparator: '.',
        decimalSeparatorToBeReplaced: ','
      }
    },
    getLocaleProperty = function(propertyName) {
      return localeData[locale.getLocale()][propertyName];
    },
    replaceDecimalSeparator: function(str) {
      return str.replace(
        getLocaleProperty("decimalSeparatorToBeReplaced"),
        getLocaleProperty("decimalSeparator")
      );
    },
    isFloatValid: function(value) {
      var pattern = getLocaleProperty("patternForFloats"),
        reg = new RegExp(pattern);

      if (_.isUndefined(value)) {
        return false;
      }

      return reg.test(value);
    };

  return {
    isFloatValid: isFloatValid,

    localeFloatString: function(value) {
      if (!_.isString(value)) {
        return value;
      }
      return replaceDecimalSeparator(value);
    },

    getLocale: function() {
      return locale.getLocale();
    },

    changeLocale: function(userLang) {
      if (userLang !== this.getLocale() &&
        preferredLanguages.isSupportedLanguage(userLang)) {
        locale.setLocale(userLang);
      }
    }
  };
})(locale, preferredLanguages);