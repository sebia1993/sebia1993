# HTML5 Network Engineer Portfolio

이 디렉터리는 `sebia1993` GitHub 프로필 저장소의 HTML5 포트폴리오 사이트입니다.

## 목적

단순 기술 키워드 목록이 아니라 다음 질문에 빠르게 답하도록 구성합니다.

1. 현재 어떤 네트워크를 실제로 운영하는가?
2. 장애를 어떤 순서와 근거로 분석하는가?
3. 공개 GitHub 프로젝트가 어떤 엔지니어링 역량을 증명하는가?
4. 대규모 Enterprise Network Engineer로 가기 위해 무엇을 보강하고 있는가?

## 경험 상태 표기 규칙

| 상태 | 의미 |
|---|---|
| `Production` | 실제 업무 환경에서 직접 운영하거나 분석한 영역 |
| `Project` | 공개 저장소에서 설계·코드·테스트 근거를 확인할 수 있는 영역 |
| `Learning` | 실무 경험으로 주장하지 않고 Lab/이론으로 보강 중인 영역 |
| `Planned` | 다음 학습 단계로 계획한 영역 |

새 기술을 추가할 때는 `Learning`을 바로 `Production`으로 바꾸지 않습니다. 최소한 아래 중 하나를 남긴 뒤 `Project` 또는 `Hands-on` 성격의 근거를 먼저 추가하는 것을 권장합니다.

- 재현 가능한 Lab topology
- 정상/장애 시나리오
- Packet capture 또는 routing/session evidence
- 구성 변경 전후 비교
- 자동 테스트 또는 validation report
- 배운 내용과 판단 한계를 설명하는 문서

## 사이트 파일

```text
docs/
├── index.html     # 본문과 포트폴리오 구조
├── styles.css     # 반응형 디자인과 Light/Dark 대응
├── app.js         # Skill Matrix 상태 필터
├── .nojekyll      # 정적 파일 그대로 배포
└── README.md      # 유지보수/배포 안내
```

외부 JavaScript 프레임워크, CDN, 웹폰트, Analytics를 사용하지 않습니다.

## GitHub Pages로 공개하는 방법

이 브랜치가 `main`에 반영된 뒤 GitHub 저장소에서 다음 설정을 사용합니다.

```text
Repository
  → Settings
  → Pages
  → Build and deployment
  → Source: Deploy from a branch
  → Branch: main
  → Folder: /docs
  → Save
```

이 저장소가 `sebia1993/sebia1993`이므로 프로젝트 Pages 주소는 일반적으로 다음 형태가 됩니다.

```text
https://sebia1993.github.io/sebia1993/
```

루트 주소 `https://sebia1993.github.io/`를 원한다면 별도의 공개 저장소 `sebia1993.github.io`가 필요합니다.

## 업데이트 원칙

### Production으로 올릴 때

업무에서 실제로 다룬 범위만 적고 회사명·실제 구조·내부 식별자는 공개하지 않습니다.

### Project로 올릴 때

README에서 기능 이름보다 아래 내용을 먼저 설명합니다.

```text
Problem → Observation → Engineering Decision → Validation → Limitation
```

### Learning 업데이트 예시

```text
BGP
Learning
  ↓
Lab: eBGP neighbor + prefix advertisement
  ↓
Lab: route selection + failure simulation
  ↓
Project evidence 작성
  ↓
Project
```

실제 업무 경험이 생겼을 때만 `Production`으로 변경합니다.

## 공개 금지 정보

- 실제 사내 IP / VLAN ID / Gateway
- SSID / BSSID / 내부 Domain
- Hostname / 장비 관리 주소
- 실제 계정 / Password / Token / Community
- 고객명 / 사업장 내부 토폴로지
- 원본 운영 로그 / PCAP / 사용자 식별정보
- 공개 승인되지 않은 실제 장애·성과 수치

대신 `large-scale enterprise campus`, `multi-controller WLAN`, `NAC environment`처럼 역할과 구조를 설명할 수 있는 비식별 표현을 사용합니다.

## 2026 → 2027 업데이트 우선순위

1. Campus L2: STP/RSTP, LACP, Inter-VLAN Routing
2. Dynamic Routing: OSPF → BGP → VRF → Redistribution
3. WAN/Security: Stateful Firewall, NAT, VPN/IPsec, Internet Edge
4. Automation: REST API, Netmiko/Nornir, Ansible, structured validation
5. Cloud: AWS VPC, TGW, VPN, Direct Connect
6. Data Center: Leaf-Spine, VXLAN/EVPN, MP-BGP

각 항목은 공부 완료 표시보다 **재현 가능한 Evidence를 하나씩 추가하는 것**을 목표로 합니다.
