<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->longText("path");
            $table->unsignedBigInteger('service_id')->default(NULL)->nullable();
            $table->foreign('service_id')
                ->references('id') 
                ->on('services')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->unsignedBigInteger('event_id')->default(NULL)->nullable();
            $table->foreign('event_id')
                ->references('id') 
                ->on('events')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images');
    }
};
