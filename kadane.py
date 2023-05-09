arr = [-2, -3, 8, -1, -2, 7, -3]
sub_arr = []

max_start = 0
max_end = 0

start = 0
end = 0

for i in range(0, len(arr)):
    max_end = max_end + arr[i]
    if max_start < max_end:
        max_start = max_end # 1. e = 8, s = 8; 2. e = 7, s = 7; 3. e = 5, s = 5; 4. e = 12, s = 12; 5. e = 9; s = 12
        end = i+1
    if max_end < 0:
        max_end = 0
        start = i+1
for j in range(start, end):
    sub_arr.append(arr[j])
print(max_start, sub_arr)

