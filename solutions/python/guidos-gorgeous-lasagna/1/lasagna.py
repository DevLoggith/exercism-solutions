EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    
    return EXPECTED_BAKE_TIME - elapsed_bake_time


def preparation_time_in_minutes(number_of_layers):
    """Calulate the recipe prep time 
    :param number_of_layers: int - number of lasagna layers in recipe
    :return: int - total amount of prep time (in minutes) based on 2x the num of layers

    Function that takes the prep time multipleyer (PREPARATION_TIME) of two minutes per
    layer of lasagna and multiplies it by the number of lasagna layers to give you the
    total amount of prep time for the recipe
    """
    return PREPARATION_TIME * number_of_layers


def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the total amount of time spent in the kitchen
    :param number_of_layers: int - number of layers in the lasagna
    :param elapsed_bake_time: int - number of minutes the lasagna has spent baking in the oven
    :return: int - total amount of time between prep time and bake time

    Function that takes the number of layers in the lasagna, mulitplies it by the
    preparation time, and adds the elapsed bake time to give you the total amount of time
    spent in the kitchen so far
    """
    return (number_of_layers * PREPARATION_TIME) + elapsed_bake_time
