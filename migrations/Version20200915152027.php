<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200915152027 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE authors (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE courriels (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, mail_from VARCHAR(255) NOT NULL, subject VARCHAR(255) NOT NULL, message LONGTEXT NOT NULL, sent_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE experiences_and_educations (id INT AUTO_INCREMENT NOT NULL, what VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, work_place VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, hyperlink_work_place VARCHAR(255) DEFAULT NULL, start_date DATE DEFAULT NULL, end_date DATE DEFAULT NULL, position_order INT NOT NULL, xp_or_education INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE miscellaneous_elements (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, update_at DATETIME NOT NULL, is_aside TINYINT(1) NOT NULL, alt VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE publications (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, image VARCHAR(255) DEFAULT NULL, editor VARCHAR(255) DEFAULT NULL, hyperlink VARCHAR(255) DEFAULT NULL, published_at DATE DEFAULT NULL, updated_at DATETIME NOT NULL, alt VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE publications_authors (publications_id INT NOT NULL, authors_id INT NOT NULL, INDEX IDX_B1E64FCAAFFB3979 (publications_id), INDEX IDX_B1E64FCA6DE2013A (authors_id), PRIMARY KEY(publications_id, authors_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE skills_and_features (id INT AUTO_INCREMENT NOT NULL, what VARCHAR(255) NOT NULL, whatmore VARCHAR(255) DEFAULT NULL, rate INT DEFAULT NULL, keywords LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', skill_or_feature INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE social_networks (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, logo VARCHAR(255) NOT NULL, hyperlink VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, firstname VARCHAR(100) NOT NULL, lastname VARCHAR(100) NOT NULL, occupation VARCHAR(255) NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', location VARCHAR(255) DEFAULT NULL, phone VARCHAR(20) DEFAULT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE web_sites (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, hyperlink VARCHAR(255) NOT NULL, image VARCHAR(255) DEFAULT NULL, updated_at DATETIME NOT NULL, alt VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE publications_authors ADD CONSTRAINT FK_B1E64FCAAFFB3979 FOREIGN KEY (publications_id) REFERENCES publications (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE publications_authors ADD CONSTRAINT FK_B1E64FCA6DE2013A FOREIGN KEY (authors_id) REFERENCES authors (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE publications_authors DROP FOREIGN KEY FK_B1E64FCA6DE2013A');
        $this->addSql('ALTER TABLE publications_authors DROP FOREIGN KEY FK_B1E64FCAAFFB3979');
        $this->addSql('DROP TABLE authors');
        $this->addSql('DROP TABLE courriels');
        $this->addSql('DROP TABLE experiences_and_educations');
        $this->addSql('DROP TABLE miscellaneous_elements');
        $this->addSql('DROP TABLE publications');
        $this->addSql('DROP TABLE publications_authors');
        $this->addSql('DROP TABLE skills_and_features');
        $this->addSql('DROP TABLE social_networks');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE web_sites');
    }
}
