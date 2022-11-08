def key_in_dict(list_of_dicts, key):
    result = []
    for d in list_of_dicts:
        if key in d:
            result.append(True)
        else:
            result.append(False)
        return result

print(key_in_dict([{"age": 10}, {"remote": False}], "age"))

