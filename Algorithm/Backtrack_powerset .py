# 4
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

# 3
# bit 연산자로 만든 powerset
'''
def f(i, k, s, key):
    global cnt
    global c
    c += 1
    if i == k:
        if s == key:
            print(bit)
            cnt += 1
    else:
        bit[i] = 0
        f(i+1, k, s, key)                 # A[i] 미포함
        bit[i] = 1
        f(i+1, k, s+A[i], key)            # A[i] 포함


A = [i for i in range(1, 11)]
N = 10
bit = [0]*N
key = 10
cnt = 0
c = 0               # 재귀가 몇 번 돌았을까?
f(0, N, 0, key)
print(cnt, c)
'''

# 1
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

# 2
# powerset을 구하는 백트래킹 알고리즘
# {1,2,3}의 부분 집합 구하기
# 0과 1로 표현해 1, 2, 3이 각각 포함되고, 포함되지 않는다는 점을 표현
'''
[0, True, True, True] = [0, 1, 1, 1] = {1,2,3}
[0, True, True, False]
[0, True, False, True]
[0, True, False, False]
[0, False, True, True]
[0, False, True, False]
[0, False, False, True]
[0, False, False, False] = [0, 0, 0, 0] = {}
'''
'''
def backtrack(a, k, input):

    if k == input : # 3 == 3 이 되면,
        print(a)    # 부분집합을 출력
    else:
        k += 1      # 반복되면서 인덱스 값이 하나씩 증가

        a[k] = True                 # 1 = 부분 집합에 요소 k(1or 2or 3)가 포함됨.
        backtrack(a, k, input)      # 되돌아가서 다시 시작
        a[k] = False                # 0 = 부분 집합에 요소 k(1or 2or 3)가 포함되지 않음.
        backtrack(a, k, input)      # 되돌아가서 다시 시작

NMAX = 4                            # 인덱스에 1,2,3이 포함되게 하기 위해서 0~3으로 배열을 지정
a = [0] * NMAX                      # a = [0,0,0,0]
backtrack(a, 0, 3)                  # a의 0~3 인덱스를  돌면서 확인
'''