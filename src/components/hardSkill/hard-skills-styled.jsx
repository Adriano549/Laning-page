import styled from "styled-components"

export const Section = styled.section`
    padding: 100px 40px;
    background: linear-gradient(135deg, #480661 0%, #783a91 100%);
    text-align: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 20% 30%, rgba(225, 13, 253, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(175, 13, 94, 0.1) 0%, transparent 50%);
        pointer-events: none;
    }

    h2 {
        font-weight: 600;
        font-size: 36px;
        margin-bottom: 60px;
        color: #ffffff;
        text-shadow: 0 0 20px rgba(225, 13, 253, 0.5);
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, #e10dfd, #af0d5e);
            border-radius: 2px;
        }
    }

    @media (max-width: 768px) {
        padding: 80px 20px;
        
        h2 {
            font-size: 28px;
            margin-bottom: 40px;
        }
    }
`;

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 25px;
    }
`;

export const SkillItem = styled.div`
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 25px;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, ${props => props.color}15, transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-10px) scale(1.02);
        border-color: ${props => props.color};
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

        &::before {
            opacity: 1;
        }

        .icon {
            color: ${props => props.color};
            transform: scale(1.3) rotate(5deg);
        }

        .progress-fill {
            background: linear-gradient(90deg, ${props => props.color}, ${props => props.color}cc);
            box-shadow: 0 0 20px ${props => props.color}66;
        }
    }

    .skill-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;

        .icon {
            font-size: 32px;
            color: #ffffff;
            transition: all 0.4s ease;
        }

        .name {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
        }
    }

    .progress-bar {
        width: 100%;
        height: 10px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 15px;
        position: relative;

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #e10dfd, #af0d5e);
            border-radius: 5px;
            transition: all 0.6s ease;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                animation: progressShine 2.5s ease-in-out infinite;
            }
        }
    }

    .level {
        font-size: 16px;
        font-weight: 700;
        color: #e10dfd;
        text-align: right;
        display: block;
        text-shadow: 0 0 10px rgba(225, 13, 253, 0.3);
    }

    @keyframes progressShine {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }

    @media (max-width: 768px) {
        padding: 20px;

        .skill-header .icon {
            font-size: 28px;
        }

        .skill-header .name {
            font-size: 16px;
        }

        .level {
            font-size: 14px;
        }
    }
`;