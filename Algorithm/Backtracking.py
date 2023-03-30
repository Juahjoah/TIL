# powerset 만들기
# {1,2,3,4,5,6,7,8,9,10}의 powerset 중 원소의 합이 10인 부분집합을 모두 출력

cnt = 1
def process_solution(arr, k, res):
    global cnt
    if res != 10 :
        return

    print(f'{cnt} :', end=' ')
    cnt += 1

    for i in range(k):
        if arr[i]:
            print(lst[i], end=' ')
    print()

def powerset(arr, k, n, res):
    global cnt
    # make_candidate를 사용하는 이유
    c = [1, 0]              # 뽑는다, 안뽑는다 2가지 경우
    ncands = 2              # 총 2가지 경우다

    if res > 10:            # 어차피 10이상으로 넘어가면 의미없음. = 10 이상은 pass
        return

    if k == n :             # 종료 조건
        # print(f'{cnt} :', end=' ')
        # cnt += 1
        process_solution(arr, k, res)
        # for idx in range(n):
        #     if arr[idx]:    # 0,1 두 가지 경우의 수가 들어있는거기 때문에
        #         print(lst[idx], end=' ')  # 1인 경우에 해당 인덱스의 숫자를 반환
        # print()
    else :                    # 종료 조건을 충족하지 않은 경우,
        # make_candidate()    # true, false -> 간단하게 쓰기 위해 그냥 변수로 지정
        for i in range(ncands):
            arr[k] = c[i]
            if arr[k] :       # k번째가 1이라면 = 숫자가 있다면,
                powerset(arr, k+1, n, res+lst[k])
            else :            # k번째 선택 안함
                powerset(arr, k+1, n, res)


lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
N = 10
arr = [0] * N                 # arr[i]를 포함시키는 경우 1
powerset(arr, 0, N, 0)        # arr_여부에 대한 리스트, 선택한 개수, 선택해야하는 개수


# 기본코드
'''
def powerset(arr, k, n):
    # make_candidate를 사용하는 이유
    c = [1, 0]              # 뽑는다, 안뽑는다 2가지 경우
    ncands = 2              # 총 2가지 경우다

    if k == n :             # 종료 조건
        for idx in range(n):
            if arr[idx]:    # 0,1 두 가지 경우의 수가 들어있는거기 때문에
                print(lst[idx], end=' ')  # 1인 경우에 해당 인덱스의 숫자를 반환
        print()
    else :                  # 종료 조건을 충족하지 않은 경우,
        # make_candidate()    # true, false -> 간단하게 쓰기 위해 그냥 변수로 지정
        for i in range(ncands):
            arr[k] = c[i]
            powerset(arr, k+1, n)


lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
N = 10
arr = [0] * N               # arr[i]를 포함시키는 경우 1
powerset(arr, 0, N)         # arr_여부에 대한 리스트, 선택한 개수, 선택해야하는 개수
'''