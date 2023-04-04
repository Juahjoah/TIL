# Spanning Tree(신장 트리) : n 개의 정점으로 이루어진 무방향 그래프에서 n개의 정점과 n-1개의 간선으로 이루어진 트리
# 최소 연결부분(= 간선 수가 가장 적음) 그래프. 

# Minimum Spanning Tree(최소 신장 트리) : MST. 무방향 가중치 그래프에서 신장 트리를 구성하는 간선들의 가중치의 합이 최소인 신장 트리
# 각  간선의 가중치가 동일하지 않을 때, 단순히 적은 간선을 사용하는 것이 최소 비용으로 직결되는 것은 아님. 간선에 가중치를 고려하여 최소 비용의 Spanning Tree를 선택하는 것을 말함.
# 특징→ ① 간선의 가중치의 합이 최소 ② n개의 정점을 가지는 그래프에 대해 반드시 (n-1)개의 간선만을 사용 ③ 사이클이 포함되어서는 안됨. 


# Kruskal MST 알고리즘
# 네트워크(가중치를 간선에 할당한 그래프)의 모든 정점을 최소 비용으로 연결하는 최적 해답을 구하기
# 코드 구현
def find_set(x):            # x가 속한 집합의 대표 리턴
    while x != rep[x]:      # x == rep[x] 까지
        x = rep[x]
    return x

def union(x, y):            # y의 대표 원소가 x의 대표원소를 가리키도록 함.
    rep[find_set(y)] = find_set(x)


V, E = map((int, input().split()))  # 0~V 정점 번호, E 간선 수
# makeset()
rep = [i for i in range(V+1)]

graph = []
for _ in range(E):
    v1, v2, w = map(int, input().split())
    graph.append([v1, v2, w])
    # graph.append([w, v1, v2])

# (1) 가중치 기준 오름차순 정렬
graph.sort(key=lambda x:x[2])
# graph.sort()

# (2) N개 정점(V+1), N-1 개의 간선 선택
N = V + 1
s = 0                                   # MST에 포함된 간선의 가중치의 합
cnt = 0
MST = []                                # MST가 어떻게 만들어졌는지 확인하기 위한 값. 꼭 필요한거 아님.
for u, v, w in graph :                  # 가중치가 작은 것부터~
    if find_set(u) != find_set(v):      # 사이클이 생기지 않으면,
        cnt += 1
        s += w                          # 가중치의 합
        MST.append([u,v,w])
        union(u, v)
        if cnt == N-1 :                 # MST 구성 완료
            break
print(s)
