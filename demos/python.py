from collections import deque

# comment
def topo(G, ind=None, Q=[1]):
    if ind == None:
        ind = [0] * (len(G) + 1)
        for u in G:
            for v in G[u]:
                ind[v] += 1
        Q = deque()
        for i in G:
            if ind[i] == 0:
                Q.append(i)
    if len(Q) == 0:
        return
    v = Q.popleft()
    print(v)
    for w in G[v]:
        ind[w] -= 1
        if ind[w] == 0:
            Q.append(w)
    topo(G, ind, Q)

class SomeClass:
    def create_arr(self):
        self.arr = []
    
    def insert_to_arr(self, value):
        self.arr.append(value)
        
    @classmethod
    def class_method(cls):
        print("the class method was called")