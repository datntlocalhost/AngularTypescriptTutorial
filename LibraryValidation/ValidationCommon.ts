class ValidationCommon {

    /*=================================================================================================*/
    /*                                           StringValidation                                      */
    /*=================================================================================================*/

    /**
     * Check if the string is null.
     * 
     * @param str
     *        The string to check.
     * @return true if the string is null. Else return false.
     */
    public static isNull(str: string): boolean {
        if (str == null) {
            return true;
        }
        return false;
    }

    /**
     * Check if the string is not null.
     * 
     * @param str
     *        The string to check.
     * @return true if the string is NOT null. Else return false.
     */
    public static isNotNull(str: string): boolean {
        return !this.isNull(str);
    }

    /**
     * Check if the string is empty.
     * 
     * @param str
     *        The string to check.
     * @return true if the string is empty.
     *         Else return false if the string is null or not empty.
     */
    public static isEmpty(str: string): boolean {
        if (this.isNull(str)) {
            return false;
        }
        return str.length == 0;
    }

    /**
     * Check if the string is NOT empty.
     * 
     * @param str 
     *        The string to check.
     * @return true if the string is NOT empty.
     *         false if the string is null or empty.
     */
    public static isNotEmpty(str: string): boolean {
        if (this.isNull(str)) {
            return false;
        }
        return !this.isEmpty(str);
    }

    /**
     * Check if the string is null or empty.
     * 
     * @param str 
     *        The string to check.
     * @return true if the string is null or empty.
     *         false if the string is not null or NOT empty.
     */
    public static isNullOrEmpty(str: string): boolean {
        return this.isNull(str) || this.isEmpty(str);
    }

    /**
     * Check if the string is whitespace.
     * 
     * @param str
     *        The string to check.
     * @return true if the string is whitespace or empty.
     *         false if the string is null or NOT whitespace.
     */
    public static isBlank(str: string): boolean {
        var regex: string = "^[ ]*$";

        if (this.isNull(str)) {
            return false;
        }
        var result: RegExpMatchArray = str.match(regex);

        return result !== null;
    }

    /**
     * Check if the string is now whitespace.
     * 
     * @param str
     *        The string to check.
     * @return true if the string is NOT whitespace or NOT empty.
     *         false if the string is null or whitespace.
     */
    public static isNotBlank(str: string): boolean {
        if (this.isNull(str)) {
            return false;
        }
        return !this.isBlank(str);
    }

    /**
     * Check if the string is empty. With this method the string can contain whitespace.
     * 
     * @param str
     *        The string to check.
     * @return true if the string is empty, it also true if the string is whitespace.
     *         Return false if the string is null or NOT whitespace or NOT empty.
     */
    public static isEmptyWithSpace(str: string): boolean {
        if (this.isNull(str)) {
            return false;
        }

        if (this.isBlank(str) || this.isEmpty(str)) {
            return true;
        }
        return false;
    }

    /**
     * Check if the length of string is equal maxLength.
     * 
     * @param str 
     *        The string to check.
     * @param maxLength 
     *        The max length want to compare. The maxLength have to integer number.
     * @return true if length of string is equal to maxLength.
     *         false if length of string less or larger than maxLength or the string is null or empty.
     */
    public static isMaxLength(str: string, maxLength: number): boolean {
        if (this.isNullOrEmpty(str)) {
            return false;
        }

    }


     /**
     * Check if the string is number format.
     * 
     * @param str 
     *        The string to check.
     * @return true if the string is number format.
     *         false if the string is null or empty or NOT number format.
     */
    public static isNumber(str: string): boolean {
        var regex = /^[+-]?\d*(\.\d+)?$/;

        if (this.isNullOrEmpty(str)) {
            return false;
        }

        var result: RegExpMatchArray = str.match(regex);
 
        return result !== null;
    }

    /*=================================================================================================*/
    /*                                          NumberValidation                                       */
    /*=================================================================================================*/

    /**
     * Check if the string is integer number.
     * 
     * @param str 
     *        The string to check.
     * @return true if the string is integer number.
     *         false if the string is null or empty or NOT integer number format.
     */
    public static isIntegerNumber(str: string): boolean {
        var regex = /^[+-]?\d*$/;

        if (this.isNullOrEmpty(str)) {
            return false;
        }

        var result: RegExpMatchArray = str.match(regex);

        return result !== null;
    }

    /**
     * Check if the string is float number format.
     * 
     * @param str 
     *        The string to check.
     * @return true if the string is float number format.
     *         false if the string is null or empty or not float number format.
     */
    public static isFloatNumber(str: string): boolean {
        return this.isNumber(str);
    }

}
