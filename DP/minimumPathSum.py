def cost(matrix, i=0, j=0, lookup=None):
    lookup = {} if lookup is None else lookup
    n, m = len(matrix), len(matrix[0])
    if (i, j) in lookup:
        return lookup[(i, j)]
    if i == n-1 and j == m-1:
        return matrix[i][j]
    elif i == n-1:
        lookup[(i, j)] = matrix[i][j] + cost(matrix, i, j+1, lookup)
        return lookup[(i, j)]
    elif j == m-1:
        lookup[(i, j)] = matrix[i][j] + cost(matrix, i+1, j, lookup)
        return lookup[(i, j)]
    else:
        lookup[(i, j)] = matrix[i][j] + min(cost(matrix, i+1, j, lookup),
                                            cost(matrix, i, j+1, lookup))
        return lookup[(i, j)]
    
matrix = [[1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]
print(cost(matrix))
