# def values_for_key(list_of_dicts, key):
#     result = []
    
#     for l in list_of_dicts:
#         if key in l.keys():
#             result.append(l[key])
#         else:
#             result.append(None)
    
#     return result

# # print(values_for_key([{"age": 10}, {"age": 12}], "age"))
# print(values_for_key([{"age": 10}, {"remote": False}], "age"))

def simple_sort(values):
    # Set i = 1
    i = 1

    # While i is less than the length of 'values'
    while i < len(values):

        # Set j = i
        j = i

        # While j is greater than 0 and values[j - 1] > values[j]
        while j > 0 and values[j-i] > values[j]:

            # Set tmp = values[j]
            tmp = values[j]

            # Set values[j] = values[j - 1]
            values[j] = values[j-1]

            # Set values[j - 1] = tmp
            values[j-1] = tmp

            # Reduce j by 1
            j -= 1

        # Increase i by 1
        i += 1

    return values   

print(simple_sort([5, 3, 1, 2, 4]))