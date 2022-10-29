# def filter_less_than_or_equal_to(values, threshold):
#     ''' 
#     Filter elements from values if it's less than or equal to threshold
    
#     Inputs: values (list), threshold (number, string)
#     Outputs: list 
#     '''

#     output = []

#     # 1. Loop through the list
#     for v in values:
#         # 2. For each element, test to see if element <= threshold
#         if v <= threshold:
#             # 3. If it is, then append to output
#             output.append(v)

#     print(output)
#     return output

# filter_less_than_or_equal_to(["a", "d", "z"], "c")


def values_for_key(list_of_dicts, key):
    # Return list of values for each key in each dictionary; If dictionary
    # doesn't have key, return None. 
    # Input: list_of_dicts(list of dictionaries), key(string)
    # Output: list
    
    output = []
    
    # 1. Loop through list of dictionaries with a for loop
    for dict in list_of_dicts:
        
        # 2. For each dictionary, if it doesn't contain the key
        if key not in dict:
            
            #3. Return none
            output.append(None)
            
        # 4. Else, if the dictionary DOES have the key
        else:
            #5. Append the value to the output
            output.append(dict[key])
    
    return output


list = [{"age": 10}, {"age": 12}]
k = "age"

print(values_for_key(list, k))