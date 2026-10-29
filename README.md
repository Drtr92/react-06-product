# react-06-product 프로젝트

## 상품에 대한 목록 페이지
- 목록 API : https://dummyjson.com/products?limit=12

## 상품 상세 페이지
- 상세 API : https://dummyjson.com/products/${id}

## 페이지 구성
- 목록 데이터를 출력하는 페이지 컴포넌트
  - ProductList

- 상품 데이터를 출력하는 페이지 컴포넌트
  - ProductDetail

## 라우터 구성
- "/" : <ProductList />
- "/product/:id" => <ProductDetail />

{/* 
    /로 구성되는 자리가 2개이면 무조건 2개를 맞춰줘야함.
    첫번째 자리는 product이고, 두번째 자리는 아무거나
*/}